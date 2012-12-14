<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Linez!</title>
    <link rel="stylesheet" href="css/lnz.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    <style type="text/css">
		html, body { width : 100%; min-height:100%;margin: 0; padding : 0; font-family: arial }
		body { background: #eee; height : auto;  }
    </style>
</head>
<body>
<div id="lnz-canvas">
</div>

<div class="foo f ">Foo</div>
<div class="bar b">Bar</div>

<div class="foo1 f">Foo</div>
<div class="bar1 b">Bar</div>

<div class="foo2 f">Foo</div>
<div class="bar2 b">Bar</div>

</body>
<script type="text/javascript" src="js/lnz.js"></script>
<script type="text/javascript">

	$('.foo,.bar' ).draggable();
	$('.foo1,.bar1' ).draggable();
	$('.foo2,.bar2' ).draggable();
</script>

</html>