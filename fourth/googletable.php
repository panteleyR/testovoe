<?php

$text = "
18615 Rogers Place SanAntonio Tx . 78258
477 south clinton st 2ndfl east orange, nj 07018
3113 40th ave Meridian,MS 39307
2479 Peachtree Rd NE Atlanta, Ga 30305
";

$pattern = [
    '/\bPlace\b/',
    '/\bSanAntonio\b/',
    '/\bTx\b/',
    '/\b \.\b/',
    '/\bsouth clinton st\b/',
    '/\b2ndfl\b/',
    '/\beast orange,\b/',
    '/\bnj\b/',
    '/\bave\b/',
    '/\bMeridian,MS\b/',
    '/\bNE\b/',
    '/\bGa\b/',
];

$replacement = [
    'Pl',
    'San Antonio,',
    'TX',
    '',
    'S Clinton St',
    '#2ndfl,',
    'East Orange,',
    'NJ',
    'Ave,',
    'Meridian, MS',
    'NE,',
    'GA'
];
$text = preg_replace($pattern, $replacement, $text);

print_r($text);