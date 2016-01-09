<?php

/*
  Plugin Name: Iron Icons
  Plugin URI: http://wpfilebase.com/
  Description: Iron Icons
  Version: 0.1.0
  Author: Fabian Schlieper
  Author URI: http://wpfilebase.com/
 */


function iron_icon_shortcode( $atts ) {
    $a = shortcode_atts( array(
		'icon' => '',
		'color' => '',
		'size' => 24
    ), $atts );
	
	$icon = explode(':',$a['icon']);
	if(empty($icon[1])) {
		$icon[1] = $icon[0];
		$icon[0] = 'iron';
	} elseif($icon[0] === 'icons')
		$icon[0] = 'iron';
		
	$icon_svg = plugins_url("icons/{$icon[0]}.svg",__FILE__);	
	$color = empty($a['color']) ? 'currentColor' : $a['color'];
	$style = " style=\"fill:{$color}\"";	
	
	$size = 0+$a['size'];
	$s = $size / 24;
	
	$uses = "<use x='0' y='0' transform='scale($s)' xlink:href='{$icon_svg}#{$icon[1]}' $style/>";
    return "<svg  width='$size' height='$size' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>$uses</svg>";
}
add_shortcode( 'iron-icon', 'iron_icon_shortcode' );