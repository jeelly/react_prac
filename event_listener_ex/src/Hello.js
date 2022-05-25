import React from 'react';

function Hello({color, name, isSpecial}) {
  
    return (
    <div style={{ color }}>
      {/* { isSpecial ? <b>*</b> : null } */}
      {isSpecial && <b>*</b>} 
      {/*  위에 삼항 연산자랑 뜻은 같다 단축 평가 논리 계산법이다 */}
      안녕하세요 {name}
    </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
  }

export default Hello;