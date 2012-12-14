var lnz = function(){

};

var $lnzCanvas = $( '#lnz-canvas' );
var lnzId = function(){
	var idSeed = 0;
	return function(){
		return idSeed++;
	}
}();


var lnzLine = function( start, end ){
	var T = this;

	var $start = ( typeof start == 'object' ) ? start : null;
	var $end = ( typeof end == 'object' ) ? end : null;
	var canvasW = $lnzCanvas.width();
	var canvasH = $lnzCanvas.height();

	var staticStartPos = function(){ return start;}
	var staticEndPos = function(){ return end; }

	var dynamicStartPos = function(){
		return [$start.offset().left, $start.offset().top]
	}
	var dynamicEndPos = function(){
		return [$end.offset().left, $end.offset().top]
	}

	var starPos = ( typeof start == 'object' ) ? dynamicStartPos : staticStartPos;
	var endPos = ( typeof end == 'object' ) ? dynamicEndPos : staticEndPos;


	T.applyPos = function(){
		T.$this.css( {
			left  :starPos()[0],
			top   :starPos()[1],
			right :canvasW - endPos()[0],
			bottom:canvasH - endPos()[1]
		} );
	}

	T.id = lnzId();
	$lnzCanvas.append( '<div class="lnz" id="lnz-' + T.id + '"  ></div>' );
	T.$this = $( '#lnz-' + T.id  );

	T.a = window.setInterval(T.applyPos, 20 );

};

var a = new lnzLine( $( '.foo' ), $( '.bar' ) );
var b = new lnzLine( $( '.bar' ), $( '.foo1' ) );
var c = new lnzLine( $( '.foo1' ), $( '.bar2' ) );