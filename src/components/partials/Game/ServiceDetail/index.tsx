import React from 'react';

const ServiceDetail = ({
  content,
  className = '',
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-secondary p-6 md:rounded-2xl mt-8 md:mx-margin ${className}`}
    >
      <article
        className={`prose prose-sm prose-invert max-w-none
          [&_h2]:text-xl [&_h2]:my-4
          [&_h3]:mb-2 [&_h3]:mt-4
          [&_p]:mb-3 [&_p]:leading-relaxed [&_p]:text-sm
          [&span]:my-4
          [&_tr]:border-b [&_tr]:border-secondary-foreground [&_td]:p-4 [&_td]:text-sm
          [&_tr]:align-text-top
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
          [&_li]:mb-2
          [&_a]:text-primary [&_a]:underline hover:[&_a]:opacity-80
          ${className}
          `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ServiceDetail;
