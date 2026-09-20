import React from 'react';

interface Props {
  items: { label: string; onClick?: () => void }[];
}

export const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {item.onClick && !isLast ? (
              <span className="breadcrumb-link" onClick={item.onClick} role="button" tabIndex={0}>
                {item.label}
              </span>
            ) : (
              <span className={isLast ? 'breadcrumb-current' : 'breadcrumb-link'}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="breadcrumb-separator">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
