module.exports = {
	siteMetadata: {
		siteUrl: 'https://caragents.app',
		title: 'CARAGENTS',
		description: 'Buy a car of your dreams stress-free'
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
		{
			resolve: 'gatsby-plugin-sharp',
			options: { useMozJpeg: true }
		},
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-source-mongodb`,
			options: {
				connectionString: 'mongodb+srv://gatsby:M7XFgmlQHo3dc1DR@fastlabs-9ib4r.mongodb.net',
				dbName: `caragents`,
				collection: [ 'cars' ]
			}
		},
		{
			resolve: `gatsby-source-googlemaps-static`,
			options: {
				key: `AIzaSyD78uh7WmMfaD0NSB2k_lzrL9xhOCR1UqY`,
				center: `37.964601, -122.520081`
			}
		},
		{
			resolve: 'gatsby-plugin-tags',
			options: {
				templatePath: `${__dirname}/src/templates/tags.js`
			}
		},

		// {
		// 	resolve: 'gatsby-plugin-categories',
		// 	options: {
		// 		templatePath: `${__dirname}/src/templates/category.js`
		// 	}
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GatsbyJS`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [ `/about/`, `/inventory/*` ]
			}
		},
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
			resolve: `gatsby-source-cloudinary`,
			options: {
				cloudName: 'fastlabs',
				apiKey: '422643182559222',
				apiSecret: 'zPhz5wUJ2aOsFVEikLddFREUwrk',
				resourceType: `image`,
				tags: `true`,
				prefix: `caragents/`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-221463253',
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
