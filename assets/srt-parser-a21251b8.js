import{V as h,a as i,b as u}from"./prod-9d861c9c.js";import"./app-8101dc6d.js";const c=/,/g,n="-->";class o extends h{parse(s,e){var a,r;if(s==="")this.a&&(this.e.push(this.a),(r=(a=this.f).onCue)==null||r.call(a,this.a),this.a=null),this.b=i.None;else if(this.b===i.Cue)this.a.text+=(this.a.text?`
`:"")+s;else if(s.includes(n)){const t=this.c(s,e);t&&(this.a=new u(t[0],t[1],t[2].join(" ")),this.a.id=this.d,this.b=i.Cue)}this.d=s}c(s,e){return super.c(s.replace(c,"."),e)}}function d(){return new o}export{o as SRTParser,d as default};
