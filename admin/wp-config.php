<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'portfolio' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Kw~x7lHk;bE.[D`t3h3JvV1JCy7#]Xvx-lI0]c>.5IvB[` |qNsih1)+peB|iax)' );
define( 'SECURE_AUTH_KEY',  'Y[Wv.(QWvQ.Tt!hzK2G=laNazY*EmYk@#nU$*?XI;(m)aelkYTyqq;t#9`<G7E;A' );
define( 'LOGGED_IN_KEY',    '.8`Ztw,l7!6U3Zr(@Y=wFoXO]%V{E2gzKo_O9S?~18we5KBP|}0YNT1uiSxmT[59' );
define( 'NONCE_KEY',        '(GjiDL(m:=w1`@JoLL&;8WmE4 y&?sWesG[7d.h1i[3Pz2GmLe F6$M,8l#v>WXK' );
define( 'AUTH_SALT',        'Yc7ax&>rwp-kp[Co{IT[9/xk.?Q9E#FBpQ t ThWErj}Tr$}WbPhM1CkHkOHVizD' );
define( 'SECURE_AUTH_SALT', 'qjV]o/j7|X6?fZ|#m3w8UD?<P<cd)7>-i61&dxKrfV,2f/o0r>9AyDS0#nT)K?ep' );
define( 'LOGGED_IN_SALT',   'bkGU/k=N/k]kX{=mf_i.Yc?4J!R<:X.9-+-MD7+6JRxlkeL%pbNf{zeI2t4Bp>(1' );
define( 'NONCE_SALT',       ';oRy}2X2~K0qovn3e6>p`Say ^+e><^sa.50`RJ+&|p)| q~&Pf_,!Ao]5eqyou]' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
