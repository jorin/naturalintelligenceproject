const ArticleBody = ({ children }) => (
  <div className='row'>
    <div className='col-md-6 mx-auto'>
      <div className='d-block text-justify'>
        {children}
      </div>
    </div>
  </div>
);

export default ArticleBody;
