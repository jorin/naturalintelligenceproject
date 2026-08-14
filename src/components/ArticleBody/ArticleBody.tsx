const ArticleBody = ({ children }: { children: any }) => (
  <div className='row'>
    <div className='col-md-6 mx-auto'>
      <div className='d-block lh-lg text-justify'>
        {children}
      </div>
    </div>
  </div>
);

export default ArticleBody;
