"use strict";


function rad(d){
	return d * Math.PI / 180.0;
  }
   
function getDistance(lat1, lng1, lat2, lng2){
	if( ( Math.abs( lat1 ) > 90  ) ||(  Math.abs( lat2 ) > 90 ) )
	  return false;
   
	if( ( Math.abs( lng1 ) > 180  ) ||(  Math.abs( lng2 ) > 180 ) )
	  return false;
   
	let radLat1 = rad(lat1);
	let radLat2 = rad(lat2);
	let a = radLat1 - radLat2;
	let b = rad(lng1) - rad(lng2);
	let s = 2 * Math.asin(
		Math.sqrt(Math.pow( Math.sin( a/2 ), 2 ) + Math.cos( radLat1 ) * Math.cos( radLat2 ) * Math.pow( Math.sin( b/2 ), 2 )
		)
	);
	s = s * 6378.137 ; 
	s = Math.round(s * 10000) / 10000;
	return s;
        }

function checkDistence(lat, lng){
    let distToSac = getDistance(lat, lng, 38.575764, -121.478851);
    distToSac = 1.60934 * distToSac;


    if(distToSac >= 150)
        return false;
   
    return;
}   
	
