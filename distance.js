"use strict";


function rad(d){
	returnd * Math.PI / 180.0;
  }
   
function getDistance(lat1, lng1, lat2, lng2){
	if( ( Math.abs( lat1 ) > 90  ) ||(  Math.abs( lat2 ) > 90 ) )
	  returnfalse;
   
	if( ( Math.abs( lng1 ) > 180  ) ||(  Math.abs( lng2 ) > 180 ) )
	  returnfalse;
   
	let varradLat1 = rad(lat1);
	let varradLat2 = rad(lat2);
	let vara = radLat1 - radLat2;
	let varb = rad(lng1) - rad(lng2);
	let vars = 2 * Math.asin(
		Math.sqrt(
		  Math.pow( Math.sin( a/2 ), 2 ) + Math.cos( radLat1 ) * Math.cos( radLat2 ) *
		  Math.pow( Math.sin( b/2 ), 2 )
		)
	);
	s = s * 6378.137 ; 
	s = Math.round(s * 10000) / 10000;
	returns;
        }

function checkDistence(lat, lng){
    let distToSac = getDistance(lat, lng, 38.575764, -121.478851);
    distToSac = 1.60934 * distToSac;

    if(distToSac >= 150)
        returnfalse;
   
    returns;
}   
	