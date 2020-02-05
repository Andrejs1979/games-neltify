const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
      allMongodbCaragentsCars {
    edges {
      node {
        id
        body
        make
        year
        mileage
        model
        mongodb_id
		price
		vin
        pictures {
          uri
        }
      }
    }
  }
    }
  `).then((result) => {
		if (result.errors) {
			result.errors.forEach((e) => console.error(e.toString()));
			return Promise.reject(result.errors);
		}

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach((edge) => {
			const id = edge.node.id;
			createPage({
				path: edge.node.fields.slug,
				tags: edge.node.frontmatter.tags,
				component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
				// additional data can be passed via context
				context: {
					id
				}
			});
		});

		// INVENTORY

		const inventory = result.data.allMongodbCaragentsCars.edges;

		inventory.forEach((edge) => {
			const { id, body, make, model, year, mileage, vin } = edge.node;
			createPage({
				path: `${make}-${model}-${year}-${vin}`,
				tags: [ make, model, year, body ],
				component: path.resolve('src/templates/inventory-page.js'),
				// additional data can be passed via context
				context: {
					id
				}
			});
		});

		// Tag pages:
		let tags = [];
		// Iterate through each post, putting all found tags into `tags`
		posts.forEach((edge) => {
			if (_.get(edge, `node.frontmatter.tags`)) {
				tags = tags.concat(edge.node.frontmatter.tags);
			}
		});
		// Eliminate duplicate tags
		tags = _.uniq(tags);

		// Make tag pages
		tags.forEach((tag) => {
			const tagPath = `/tags/${_.kebabCase(tag)}/`;

			createPage({
				path: tagPath,
				component: path.resolve(`src/templates/tags.js`),
				context: {
					tag
				}
			});
		});
	});

	// Inventory
	const result = await graphql(`
    query {
      rickandmorty {
        characters {
          results {
            id
          }
        }
      }
    }
  `);

	if (result.errors) {
		reporter.panic('Error loading characters!', reporter.errors);
	}

	result.data.rickandmorty.characters.results.forEach((character) => {
		actions.createPage({
			path: `/character/${character.id}`,
			component: require.resolve('./src/templates/character.js'),
			context: {
				characterID: character.id
			}
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node); // convert image paths for gatsby images

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};
