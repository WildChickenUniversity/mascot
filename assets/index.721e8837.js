import{S as h,P as w,W as g,G as y,a as L,H as S,A as b,O as x,M as P,b as v,c as A,d as M}from"./vendor.46db6d0d.js";const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};O();const r=new h,d=new w(75,window.innerWidth/window.innerHeight,1,1e3);d.position.set(2.5,2,5);const s=new g({canvas:document.querySelector("#chicken")});s.setPixelRatio(window.devicePixelRatio);s.setSize(window.innerWidth,window.innerHeight);const H=new y(200,50);r.add(H);const m=new L;let f;m.crossOrigin=!0;m.load("assets/chicken.glb",function(o){f=o.scene,r.add(f)});const u=new S(16777215,4473924,.2);u.position.set(0,20,0);r.add(u);const F=new b(16777215,.5);r.add(F);var n=new x(d,s.domElement);n.rotateSpeed=.3;n.zoomSpeed=.9;n.minDistance=4;n.maxDistance=20;n.minPolarAngle=0;n.maxPolarAngle=Math.PI/2;n.enableDamping=!0;n.dampingFactor=.05;const G=()=>{const o=new P(new v(.25,24,24),new A({color:16777215})),[i,c,a]=Array(3).fill().map(()=>M.randFloatSpread(100));o.position.set(i,c,a),r.add(o)};Array(500).fill().forEach(G);s.render(r,d);const p=()=>{requestAnimationFrame(p),f.rotation.y+=.01,s.render(r,d)};p();