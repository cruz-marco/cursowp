<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wordpress' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost:3307' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gEXIyMZryuZp;5wr7IGvg^z|Gt>$ojBiEH[S^VzPX@+S9m5vBte8LS,<lfS+,PHZ' );
define( 'SECURE_AUTH_KEY',  'qzqS%aft}wsIto?_ft$q5cyRRH~pdq}h8sZsW!5U1W)#A7OhlW)T@ mmuB; R JK' );
define( 'LOGGED_IN_KEY',    '4wNVVfE6A=UyCteUtgO.5(=E-ygOFz2KR3YT:&rK,y<lw-{R2eN~^_y))l) #Rg>' );
define( 'NONCE_KEY',        'UNq3DUi.,k+5)JuX`92=}r+;E77-Aoz%=K8{;k ER)ey!9xwl61O)T1Ya9o=SX3>' );
define( 'AUTH_SALT',        '[:mSK!HKffc5NyzrQH^,,rS:M,&82f[!BK&;T6^>V-AFx)5t;wlsE{wCvg?n:;%j' );
define( 'SECURE_AUTH_SALT', 'H4}>K+t7C0G#,ik1g#S&fr7~xV0OSxIN,eI@(-ScaxFV^U)pf.9OaeGA]Sk4Udky' );
define( 'LOGGED_IN_SALT',   'v:W@W8s,<[Z_ZhDVl#x!49tH/g;H:CJkNH JCi*~&/IraDd|AX;j+UF=Cba{,}WY' );
define( 'NONCE_SALT',       'R5:9.%5,Xq4 0`PSM1U%x!(Z,$^20&4eJr.Noai<$Ezs(#cyE~ooCt:)[_xUga3j' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
