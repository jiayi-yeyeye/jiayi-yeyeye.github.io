"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7869],{17869:(e,t,a)=>{a.d(t,{diagram:()=>K});var i=a(91239),l=a(27017),r=a(35228),s=a(21661),n=a(98805),o=a(93270),c=a(88750),p=s.UI.pie,d={sections:new Map,showData:!1,config:p},g=d.sections,u=d.showData,h=structuredClone(p),f=(0,s.K2)(()=>structuredClone(h),"getConfig"),m=(0,s.K2)(()=>{g=new Map,u=d.showData,(0,s.IU)()},"clear"),x=(0,s.K2)(({label:e,value:t})=>{g.has(e)||(g.set(e,t),s.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),S=(0,s.K2)(()=>g,"getSections"),w=(0,s.K2)(e=>{u=e},"setShowData"),D=(0,s.K2)(()=>u,"getShowData"),T={getConfig:f,clear:m,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:x,getSections:S,setShowData:w,getShowData:D},$=(0,s.K2)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),y={parse:(0,s.K2)(async e=>{let t=await (0,n.qg)("pie",e);s.Rm.debug(t),$(t,T)},"parse")},C=(0,s.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),k=(0,s.K2)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,o.rL)().value(e=>e.value)(t)},"createPieArcs"),K={parser:y,db:T,renderer:{draw:(0,s.K2)((e,t,a,i)=>{s.Rm.debug("rendering pie chart\n"+e);let n=i.db,p=(0,s.D7)(),d=(0,l.$t)(n.getConfig(),p.pie),g=(0,r.D)(t),u=g.append("g");u.attr("transform","translate(225,225)");let{themeVariables:h}=p,[f]=(0,l.I5)(h.pieOuterStrokeWidth);f??=2;let m=d.textPosition,x=(0,o.JL)().innerRadius(0).outerRadius(185),S=(0,o.JL)().innerRadius(185*m).outerRadius(185*m);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let w=n.getSections(),D=k(w),T=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],$=(0,c.UM)(T);u.selectAll("mySlices").data(D).enter().append("path").attr("d",x).attr("fill",e=>$(e.data.label)).attr("class","pieCircle");let y=0;w.forEach(e=>{y+=e}),u.selectAll("mySlices").data(D).enter().append("text").text(e=>(e.data.value/y*100).toFixed(0)+"%").attr("transform",e=>"translate("+S.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let C=u.selectAll(".legend").data($.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*$.domain().length/2)+")");C.append("rect").attr("width",18).attr("height",18).style("fill",$).style("stroke",$),C.data(D).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return n.getShowData()?`${t} [${a}]`:t});let K=512+Math.max(...C.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));g.attr("viewBox",`0 0 ${K} 450`),(0,s.a$)(g,450,K,d.useMaxWidth)},"draw")},styles:C}},91239:(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(21661).K2)(i,"populateCommonDb")}}]);