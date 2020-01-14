module.exports = {
	siteMetadata: {
		siteUrl: 'https://mark.camera',
		title: 'Promote your business on Instagram at scale',
		description: 'Promote your business on Instagram at scale'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		// {
		//   resolve: "gatsby-plugin-tags",
		//   options: {
		//     templatePath: `${__dirname}/src/templates/tag.js`,
		//   },
		// },
		// {
		// 	resolve: 'gatsby-plugin-categories',
		// 	options: {
		// 		templatePath: `${__dirname}/src/templates/category.js`
		// 	}
		// },
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static'
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-96016389-11',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: false,
				// Setting this parameter is also optional
				respectDNT: false,
				// Avoids sending pageview hits from custom paths
				exclude: [ '/preview/**', '/admin/**' ],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0
			}
		},
		// {
		// 	resolve: `gatsby-plugin-segment-js`,
		// 	options: {
		// 		// your segment write key for your production environment
		// 		// when process.env.NODE_ENV === 'production'
		// 		// required; non-empty string
		// 		prodKey: `9IfYVK6NS8ZnCmQJCSTutHLheTBtrKZY`,

		// 		// if you have a development env for your segment account, paste that key here
		// 		// when process.env.NODE_ENV === 'development'
		// 		// optional; non-empty string
		// 		devKey: `SEGMENT_DEV_WRITE_KEY`,

		// 		// boolean (defaults to false) on whether you want
		// 		// to include analytics.page() automatically
		// 		// if false, see below on how to track pageviews manually
		// 		trackPage: true
		// 	}
		// },
		// {
		// 	resolve: `gatsby-plugin-facebook-pixel`,
		// 	options: {
		// 		pixelId: '503703380484900'
		// 	}
		// },
		// {
		// 	resolve: `gatsby-plugin-linkedin-insight`,
		// 	options: {
		// 		partnerId: '1502962',
		// 		includeInDevelopment: false
		// 	}
		// },

		// {
		// 	resolve: `gatsby-plugin-intercom`,
		// 	options: {
		// 		appId: 'f1en2chr'
		// 	}
		// },
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: [ '/all.sass' ] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify' // make sure to keep it last in the array
	]
};
