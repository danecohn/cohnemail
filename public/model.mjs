export const APPS = [
  {id:'mail', name:'Mail', subtitle:'A little hello', group:'everyday', url:'https://www.icloud.com/mail/', keywords:'email inbox letter'},
  {id:'calendar', name:'Calendar', subtitle:'Make time together', group:'everyday', url:'https://www.icloud.com/calendar/', keywords:'events dates plans schedule'},
  {id:'photos', name:'Photos', subtitle:'Keep the good bits', group:'everyday', url:'https://www.icloud.com/photos/', keywords:'pictures albums memories'},
  {id:'drive', name:'iCloud Drive', subtitle:'Everything, in reach', group:'everyday', url:'https://www.icloud.com/iclouddrive/', keywords:'files folders documents storage'},
  {id:'notes', name:'Notes', subtitle:'Catch a thought', group:'everyday', url:'https://www.icloud.com/notes/', keywords:'write list ideas'},
  {id:'reminders', name:'Reminders', subtitle:'One less thing to forget', group:'everyday', url:'https://www.icloud.com/reminders/', keywords:'tasks todo shopping groceries'},
  {id:'contacts', name:'Contacts', subtitle:'Your favorite people', group:'everyday', url:'https://www.icloud.com/contacts/', keywords:'address book phone people'},
  {id:'find', name:'Find Devices', subtitle:'A little peace of mind', group:'everyday', url:'https://www.icloud.com/find/', keywords:'find my lost iphone ipad mac'},
  {id:'pages', name:'Pages', subtitle:'Put it into words', group:'create', url:'https://www.icloud.com/pages/', keywords:'documents write word'},
  {id:'numbers', name:'Numbers', subtitle:'Make it all add up', group:'create', url:'https://www.icloud.com/numbers/', keywords:'spreadsheet budget excel'},
  {id:'keynote', name:'Keynote', subtitle:'Share a bright idea', group:'create', url:'https://www.icloud.com/keynote/', keywords:'presentation slides powerpoint'},
  {id:'icloud', name:'iCloud', subtitle:'Your Apple home', group:'everyday', url:'https://www.icloud.com/', keywords:'account apple home settings'}
];
export const DEFAULTS={favorites:['mail','calendar','photos','drive'], appearance:'sunrise', newTab:true, name:'', message:'Your people. Your memories. Your everyday.', note:'', links:[]};
export function safeUrl(value){try{const url=new URL(value);if(url.protocol!=='https:'||url.username||url.password)return null;return url.href;}catch{return null;}}
export function normalizeState(input){
  if(!input||typeof input!=='object'||Array.isArray(input))return structuredClone(DEFAULTS);
  return {favorites:Array.isArray(input.favorites)?[...new Set(input.favorites.filter(id=>APPS.some(a=>a.id===id)))]:[...DEFAULTS.favorites],appearance:['sunrise','twilight'].includes(input.appearance)?input.appearance:'sunrise',newTab:input.newTab!==false,name:typeof input.name==='string'?input.name.slice(0,40):'',message:typeof input.message==='string'?input.message.slice(0,130):DEFAULTS.message,note:typeof input.note==='string'?input.note.slice(0,2000):'',links:Array.isArray(input.links)?input.links.slice(0,30).filter(l=>l&&typeof l.id==='string'&&typeof l.name==='string'&&safeUrl(l.url)).map(l=>({id:l.id.slice(0,80),name:l.name.slice(0,60),url:safeUrl(l.url)})):[]};
}
export function searchApps(query, links=[]){const q=query.trim().toLocaleLowerCase();return [...APPS,...links.map(l=>({...l,subtitle:new URL(l.url).hostname,custom:true}))].filter(a=>`${a.name} ${a.subtitle} ${a.keywords||''}`.toLocaleLowerCase().includes(q));}
export function getWeek(date){const start=new Date(date.getFullYear(),date.getMonth(),date.getDate());start.setDate(start.getDate()-start.getDay());return Array.from({length:7},(_,i)=>{const d=new Date(start);d.setDate(d.getDate()+i);return d;});}
