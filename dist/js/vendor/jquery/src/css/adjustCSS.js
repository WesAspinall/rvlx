define(["../core","../var/rcssNum"],function(r,n){function e(e,u,c,s){var t,i=1,f=20,o=s?function(){return s.cur()}:function(){return r.css(e,u,"")},a=o(),d=c&&c[3]||(r.cssNumber[u]?"":"px"),m=(r.cssNumber[u]||"px"!==d&&+a)&&n.exec(r.css(e,u));if(m&&m[3]!==d){d=d||m[3],c=c||[],m=+a||1;do i=i||".5",m/=i,r.style(e,u,m+d);while(i!==(i=o()/a)&&1!==i&&--f)}return c&&(m=+m||+a||0,t=c[1]?m+(c[1]+1)*c[2]:+c[2],s&&(s.unit=d,s.start=m,s.end=t)),t}return e});