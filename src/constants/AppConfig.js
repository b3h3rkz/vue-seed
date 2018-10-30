/**
 * App Config File
 */
export default {
	appLogo: '/static/img/site-logo.png',                                   // App Logo,
	darkLogo: '/static/img/site-dark-logo.png',							         // dark logo
	appLogo2: '/static/img/session.png',                                    // App Logo 2 For Login & Signup Page
	brand: 'Vuely',                                        			         // Brand Name
	copyrightText: 'Vuely © 2018 All Rights Reserved.',                     // Copyright Text
	enableUserTour: process.env.NODE_ENV === 'production' ? true : false    // Enable User Tour
}
