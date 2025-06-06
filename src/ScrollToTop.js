// مكون ScrollToTop.js
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);

// ثم استخدمه في مكون App الرئيسي
function App() {
  return (
    <>
      <ScrollToTop />
      {/* بقية مكونات التطبيق */}
    </>
  );
}