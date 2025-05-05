// src/components/ProductDisplay/ProductDisplay.tsx

import React from 'react';
import { AccordionGroup } from '../Accordion';
import { Table } from '../Table';
import { ProductGroup, useData } from '../../context/';

interface ProductDisplayProps {
  data: ProductGroup[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ data }) => {
  const { getSelectedRowsCount } = useData();

  // Transform product groups into accordion items
  const accordionItems = data.map((product) => {
    // Get the number of selected rows for both tables
    const pecSelectedCount = getSelectedRowsCount(product.product_group, 'pec_table');
    const harmSelectedCount = getSelectedRowsCount(product.product_group, 'harm_table');
    const totalSelectedCount = pecSelectedCount + harmSelectedCount;

    return {
      id: product.product_group,
      title: `Product Group: ${product.product_group}`,
      badge: totalSelectedCount,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Product Experience Codes
              {pecSelectedCount > 0 && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {pecSelectedCount} selected
                </span>
              )}
            </h3>
            <Table
              data={product.pec_table}
              productGroup={product.product_group}
              tableType="pec_table"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">
              Harm
              {harmSelectedCount > 0 && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {harmSelectedCount} selected
                </span>
              )}
            </h3>
            <Table
              data={product.harm_table}
              productGroup={product.product_group}
              tableType="harm_table"
            />
          </div>
        </div>
      ),
    };
  });

  return <AccordionGroup items={accordionItems} />;
};

export default ProductDisplay;
