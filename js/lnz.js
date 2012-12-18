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
	var zeroFunc = function(){return 0;}
	var startW = ( typeof start == 'object' ) ? function(){ return $start.outerWidth(); } : zeroFunc;
	var startH = ( typeof start == 'object' ) ? function(){ return $start.outerHeight(); } : zeroFunc;
	var endW = ( typeof end == 'object' ) ? function(){ return $end.outerWidth(); } : zeroFunc;
	var endH = ( typeof end == 'object' ) ? function(){ return $end.outerHeight(); } : zeroFunc;
	var canvasW = $lnzCanvas.width();
	var canvasH = $lnzCanvas.height();

	var staticStartPos = function(){ return start;};
	var staticEndPos = function(){ return end; };

	var dynamicStartPos = function(){
		return [$start.offset().left + (startW()/2), $start.offset().top + (startH()/2)]
	};

	var dynamicEndPos = function(){
		return [$end.offset().left + (endW()/2), $end.offset().top  + (endH()/2)]
	};

	var startPos = ( typeof start == 'object' ) ? dynamicStartPos : staticStartPos;
	var endPos = ( typeof end == 'object' ) ? dynamicEndPos : staticEndPos;


	T.applyPos = function(){
		var tmpStartPos = startPos();
		var tmpEndPos =  [  endPos()[0] - tmpStartPos[0],endPos()[1] -tmpStartPos[1]];
		if(tmpEndPos[0]*tmpEndPos[1] < 0){T.$this.addClass('rev');} else {T.$this.removeClass('rev');}
		T.$this.css( {
			left  :tmpStartPos[0]+(tmpEndPos[0]>0?0:tmpEndPos[0]),
			top   :tmpStartPos[1]+(tmpEndPos[1]>0?0:tmpEndPos[1]),
			width :Math.abs(tmpEndPos[0]),
			height:Math.abs(tmpEndPos[1])
		} );

	};

	T.id = lnzId();
	$lnzCanvas.append( '<div class="lnz" id="lnz-' + T.id + '"  ></div>' );
	T.$this = $( '#lnz-' + T.id );

	T.a = window.setInterval( T.applyPos, 20 );

};

var a = new lnzLine( $( '.foo' ), $( '.bar' ) );
var b = new lnzLine( $( '.bar' ), $( '.foo1' ) );
var c = new lnzLine( $( '.foo1' ), $( '.bar2' ) );