!function(){"use strict";var e=window.React,t=window.ReactDOM,l=window.wp.i18n;const a=Object.keys(tp.export.tables).length;let r=a+1;r=Math.max(r,3),r=Math.min(r,12);const s=Object.entries(tp.export.tables).map((([t,a])=>{""===a.trim()&&(a=(0,l.__)("(no name)","tablepress"));const r=(0,l.sprintf)((0,l.__)("ID %1$s: %2$s","tablepress"),t,a);return(0,e.createElement)("option",{key:t,value:t},r)})),n=Object.entries(tp.export.exportFormats).map((([t,l])=>(0,e.createElement)("option",{key:t,value:t},l))),o=Object.entries(tp.export.csvDelimiters).map((([t,l])=>(0,e.createElement)("option",{key:t,value:t},l)));((e,l)=>{const a=document.getElementById("tablepress-export-screen");a&&("function"==typeof t.createRoot?(0,t.createRoot)(a).render(l):(0,t.render)(l,a))})(0,(0,e.createElement)((()=>{const[t,c]=(0,e.useState)({selectedTables:tp.export.selectedTables,exportFormat:tp.export.exportFormat,csvDelimiter:tp.export.csvDelimiter,createZipFile:!1,reverseList:!1}),p=t.selectedTables.length>1,m=(e,l)=>{const a={...t,[e]:l};c(a)};return(0,e.createElement)("table",{className:"tablepress-postbox-table fixed"},(0,e.createElement)("tbody",null,(0,e.createElement)("tr",null,(0,e.createElement)("th",{className:"column-1 top-align",scope:"row"},(0,e.createElement)("label",{htmlFor:"tables-export-list"},(0,l.__)("Tables to Export","tablepress"),":"),tp.export.zipSupportAvailable&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("br",null),(0,e.createElement)("br",null),(0,e.createElement)("label",{htmlFor:"tables-export-select-all"},(0,e.createElement)("input",{type:"checkbox",id:"tables-export-select-all",checked:t.selectedTables.length===a,onChange:()=>{const e=t.selectedTables.length===a?[]:Object.keys(tp.export.tables);m("selectedTables",e)}})," ",(0,l.__)("Select all","tablepress")),a>12&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("br",null),(0,e.createElement)("br",null),(0,e.createElement)("label",{htmlFor:"tables-export-reverse-list"},(0,e.createElement)("input",{id:"tables-export-reverse-list",type:"checkbox",checked:t.reverseList,onChange:()=>{m("reverseList",!t.reverseList),s.reverse()}})," ",(0,l.__)("Reverse list","tablepress"))))),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("select",{id:"tables-export-list",size:tp.export.zipSupportAvailable?r:1,multiple:tp.export.zipSupportAvailable,value:t.selectedTables,onChange:e=>{const t=[...e.target.selectedOptions].map((e=>e.value));m("selectedTables",t)},style:{width:"100%"}},s),tp.export.zipSupportAvailable&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("br",null),(0,e.createElement)("span",{className:"description"},(0,l.sprintf)((0,l.__)("You can select multiple tables by holding down the “%1$s” key or the “%2$s” key for ranges.","tablepress"),window?.navigator?.platform?.includes("Mac")?(0,l._x)("⌘","keyboard shortcut modifier key on a Mac keyboard","tablepress"):(0,l._x)("Ctrl","keyboard key","tablepress"),(0,l._x)("Shift","keyboard key","tablepress")))))),(0,e.createElement)("tr",null,(0,e.createElement)("th",{className:"column-1",scope:"row"},(0,e.createElement)("label",{htmlFor:"tables-export-format"},(0,l.__)("Export Format","tablepress"),":")),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("select",{id:"tables-export-format",name:"export[format]",value:t.exportFormat,onChange:e=>m("exportFormat",e.target.value)},n))),(0,e.createElement)("tr",null,(0,e.createElement)("th",{className:"column-1",scope:"row"},(0,e.createElement)("label",{htmlFor:"tables-export-csv-delimiter"},(0,l.__)("CSV Delimiter","tablepress"),":")),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("select",{id:"tables-export-csv-delimiter",name:"export[csv_delimiter]",disabled:"csv"!==t.exportFormat,value:t.csvDelimiter,onChange:e=>m("csvDelimiter",e.target.value)},o),"csv"!==t.exportFormat&&(0,e.createElement)(e.Fragment,null," ",(0,e.createElement)("span",{className:"description"},(0,l.__)("(Only needed for CSV export.)","tablepress"))))),(0,e.createElement)("tr",{className:"bottom-border"},(0,e.createElement)("th",{className:"column-1",scope:"row"},(0,l.__)("ZIP file","tablepress"),":"),(0,e.createElement)("td",{className:"column-2"},tp.export.zipSupportAvailable&&(0,e.createElement)("label",{htmlFor:"tables-export-zip-file"},(0,e.createElement)("input",{type:"checkbox",id:"tables-export-zip-file",checked:t.createZipFile||p,disabled:p,onChange:()=>m("createZipFile",!t.createZipFile)})," ",(0,l.__)("Create a ZIP archive.","tablepress"),p&&(0,e.createElement)(e.Fragment,null," ",(0,e.createElement)("span",{className:"description"},(0,l.__)("(Mandatory if more than one table is selected.)","tablepress")))),!tp.export.zipSupportAvailable&&(0,l.__)("Note: Support for ZIP file creation seems not to be available on this server.","tablepress"))),(0,e.createElement)("tr",{className:"top-border"},(0,e.createElement)("td",{className:"column-1"}),(0,e.createElement)("td",{className:"column-2"},(0,e.createElement)("input",{type:"hidden",name:"export[tables_list]",value:t.selectedTables.join()}),(0,e.createElement)("input",{type:"hidden",name:"export[zip_file]",value:t.createZipFile||p}),(0,e.createElement)("input",{type:"submit",value:(0,l.__)("Download Export File","tablepress"),className:"button button-primary button-large",disabled:0===t.selectedTables.length})))))}),null))}();