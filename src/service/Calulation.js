export const getCurrentExp = (year) => {
  const joinedYear = year;
  
  if (new Date().getFullYear() === joinedYear) {
    return `${new Date().getMonth() - 2 + 1} MONTHS`;
  } else {
    const relativeMonthExperience = 10 + new Date().getMonth() + 1
    const numberOfMonthsExtra = relativeMonthExperience - 12
    const relativeMonthDisplay = numberOfMonthsExtra > 0 ? numberOfMonthsExtra===1 ? ' 1 MONTH' : ' '+ numberOfMonthsExtra +' MONTHS':''
    if(new Date().getFullYear() - joinedYear === 1){
      if(relativeMonthExperience < 12){
        return `${relativeMonthExperience} MONTHS`;
      }else{
        return `1 YEAR ${relativeMonthDisplay}`
      }
    }else{
      return `${new Date().getFullYear() - joinedYear} YEARS ${relativeMonthDisplay}`
    }
  }
};
