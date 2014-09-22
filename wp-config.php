<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'website');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '$z>sd(9gU1q3K`]?t-N}FvM3BZ@juVjH6>T$$`HHS^CCs}LU=jNkAv7ll+KHK&;e');
define('SECURE_AUTH_KEY',  'n,X^w}xS?z-!&IQrq,MAH@ohpPj;js2GL`w@i1%a!C{lkp8Rt|YP (U.W5Y@<{`}');
define('LOGGED_IN_KEY',    'uON~Ad;[4[oX|Y6jF,r}qtCB>gc`3.Esu16HI $edUDY}~0owPzrk$*ppXc+}<dy');
define('NONCE_KEY',        '`#Ff:olKR&:>/eY.CncMO.&R;,{%ooOFB]!m(G)2*Kpy n)8fKoDN*Hi++1,;Nxv');
define('AUTH_SALT',        'Ec]fmRLaP/#aq.*W8pYE}6gh=5h e>PiF]/(CHV51&%#@5oHs{k}Jrev!/}sg?Q3');
define('SECURE_AUTH_SALT', 'Z.+?vNup7Hs1q-k19Fpb]%*.*1%e{T9|X[rvdPKu`H]Tfrv/f_PpH(Da7l&0AsF7');
define('LOGGED_IN_SALT',   '9X+^bGP(QOpVi,|OIu,.Jc^0d_6k>=t YT?@`kA sxo:HGSpy_Eh9prq[-3`ykcP');
define('NONCE_SALT',       'ng|K7kl^])hnE_]_1/i]iH<uE%,h@mH0KL!z=3c0GeH?NL4-}[Xfu0A|ItO~s$^F');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
