import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const receivedState = urlParams.get('state');
    const storedState = sessionStorage.getItem('oauth_state');
    const code = urlParams.get('code');

    if (receivedState !== storedState) {
      console.error('State mismatch - possible CSRF attack');
      // 에러 처리 또는 리다이렉트
      return;
    }

    // state 검증이 완료되면 저장된 state 제거
    sessionStorage.removeItem('oauth_state');

    if (code) {
      // 백엔드로 authorization code 전송
      // 예: 백엔드 API 호출
      console.log('Authorization Code:', code);
    }
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default Loading;