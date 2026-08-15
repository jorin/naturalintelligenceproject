const ArticleBody = ({ children, className = '' }: { children: any, className?: string }) => (
  <div className='row'>
    <div className='col-md-6 mx-auto'>
      <div className={`d-block lh-lg text-justify ${className}`}>
        {children}
      </div>
    </div>
  </div>
);

export default ArticleBody;
