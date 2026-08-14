const MainContent = ({ children }) => (
  <div className='align-items-center d-flex justify-content-center min-vh-100 p-5'>
    <div className='container text-center'>
      {children}
    </div>
  </div>
);

export default MainContent;
