function number_to_human_readable(price) {
  let digits = String(price).split('').reverse().join('');
  if(digits.length <= 0) return '0원';

  const price_units = ['','만','억','조','경','해','자','양','구','간','정','재','극','항하사','아승기','나유타','불가사의','무량대수'];
  const read_units = ['','십','백','천'];
  const number_units = ['','일','이','삼','사','오','육','칠','팔','구'];

  let ret = [];
  let group = digits.match(/.{1,4}/g);
  for(let i=0;i<group.length;i++) {
    let subret = [];
    let elements = group[i]; 
    let pu = price_units[i];
    for(let j=0;j<elements.length;j++) {
      if(elements[j] == "0") continue;
      let ru = read_units[j];
      let nu = number_units[elements[j]];
      if(ru !== '' && nu == '일') nu = '';
      subret.push(nu+ru);
    }
    if(subret.length <= 0) continue;
    ret.push(subret.reverse().join('')+pu);
  }
  return ret.reverse().join(' ')+'원';
}
