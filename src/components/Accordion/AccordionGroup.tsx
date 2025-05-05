import React, { useState, ReactNode } from 'react';
import Accordion from './Accordion';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  badge?: number;
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
          badge={item.badge}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionGroup;