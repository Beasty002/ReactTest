import { space } from 'postcss/lib/list';
import React, { useState, useEffect } from 'react';
export function VarChecker() {
  const [options, setOptions] = useState({});
  const [selectedVariant,setSelectedVariant] = useState({})
  const data = {
    productData: [
      {
        _id: '68012ea0b002ae085a465f66',
        name: 'Cameran Sykes',
        type: 'Multiple',
        slug: 'cameran-sykes',
        brand_id: '67ba11330e369917597f3115',
        unit_id: '67ba0e647fd64eda48dc3bd4',
        category_id: '67ba0e6348ba10c328d7618a',
        sub_category_id: '67ba8ba8a2dcb7069d04735a',
        sku: 'DGM-a0e63-54500',
        short_description: 'Nulla reprehenderit ',
        description: '\u003Cp\u003EVoluptatem, qui culp.\u003C/p\u003E',
        stock_alert: 0,
        availability: 'Active',
        options: ['Storage', 'RAM', 'Color'],
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907935/digimart/products/file_lkvtms.jpg',
        image_public_id: 'digimart/products/file_lkvtms',
        additional_img_ids: [],
        created_at: '2025-04-17T16:38:56.524Z',
        updated_at: '2025-04-17T16:38:56.531Z',
        __v: 0,
        brandName: 'Lenovo',
        categoryName: 'Electronics',
        unitName: 'Kilogram',
      },
    ],
    variantData: [
      {
        options: [],
        _id: '68012ea1b002ae085a465f6a',
        sku: 'DGM-a0e63-54500-82043',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '64GB',
          Color: 'Blue',
          RAM: ' 8GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907936/digimart/product_variants/file_hl2yc8.jpg',
        image_public_id: 'digimart/product_variants/file_hl2yc8',
        cost_price: 12,
        sales_price: 122,
        stock: 25,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea2b002ae085a465f6c',
        sku: 'DGM-a0e63-54500-67100',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '64GB',
          Color: 'Red',
          RAM: ' 8GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907937/digimart/product_variants/file_idhezy.webp',
        image_public_id: 'digimart/product_variants/file_idhezy',
        cost_price: 123,
        sales_price: 123,
        stock: 10,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea2b002ae085a465f6e',
        sku: 'DGM-a0e63-54500-87559',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '124GB',
          Color: 'Red',
          RAM: ' 8GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907937/digimart/product_variants/file_qhmiy9.webp',
        image_public_id: 'digimart/product_variants/file_qhmiy9',
        cost_price: 12312,
        sales_price: 12321,
        stock: 5,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea2b002ae085a465f70',
        sku: 'DGM-a0e63-54500-53167',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '124GB',
          Color: 'Blue',
          RAM: ' 8GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907937/digimart/product_variants/file_yvkvdh.jpg',
        image_public_id: 'digimart/product_variants/file_yvkvdh',
        cost_price: 1231,
        sales_price: 12312,
        stock: 12,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f71',
        sku: 'DGM-a0e63-54500-90001',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '128GB',
          Color: 'Black',
          RAM: ' 12GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa001.jpg',
        image_public_id: 'digimart/product_variants/file_aaa001',
        cost_price: 450,
        sales_price: 700,
        stock: 8,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f72',
        sku: 'DGM-a0e63-54500-90002',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '128GB',
          Color: 'Silver',
          RAM: ' 12GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa002.jpg',
        image_public_id: 'digimart/product_variants/file_aaa002',
        cost_price: 460,
        sales_price: 710,
        stock: 14,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f73',
        sku: 'DGM-a0e63-54500-90003',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '256GB',
          Color: 'Black',
          RAM: ' 16GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa003.jpg',
        image_public_id: 'digimart/product_variants/file_aaa003',
        cost_price: 880,
        sales_price: 1100,
        stock: 6,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f74',
        sku: 'DGM-a0e63-54500-90004',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '256GB',
          Color: 'Silver',
          RAM: ' 16GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa004.jpg',
        image_public_id: 'digimart/product_variants/file_aaa004',
        cost_price: 900,
        sales_price: 1150,
        stock: 9,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f75',
        sku: 'DGM-a0e63-54500-90005',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '512GB',
          Color: 'Black',
          RAM: ' 16GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa005.jpg',
        image_public_id: 'digimart/product_variants/file_aaa005',
        cost_price: 1000,
        sales_price: 1300,
        stock: 4,
        __v: 0,
      },
      {
        options: [],
        _id: '68012ea3b002ae085a465f76',
        sku: 'DGM-a0e63-54500-90006',
        product_id: ['68012ea0b002ae085a465f66'],
        combination: {
          Storage: '512GB',
          Color: 'Silver',
          RAM: ' 16GB',
        },
        image_url:
          'http://res.cloudinary.com/dggqa7j0p/image/upload/v1744907940/digimart/product_variants/file_aaa006.jpg',
        image_public_id: 'digimart/product_variants/file_aaa006',
        cost_price: 1010,
        sales_price: 1350,
        stock: 7,
        __v: 0,
      },
    ],
    cost_price: '$12-$12312',
    sales_price: '$122-$12321',
    imageData: [],
  };

  useEffect(() => {
    const optionList = data.productData[0].options.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});

    const updatedOptions = data.variantData.reduce(
      (acc, variant) => {
        Object.entries(variant.combination).forEach(([key, value]) => {
          if (acc[key]) {
            if (!acc[key].includes(value)) {
              acc[key].push(value);
            }
          }
        });
        return acc;
      },
      { ...optionList }
    );

    setOptions(updatedOptions);
  }, []);


  const isOptionDisabled = (option,value) => {
    const updatedSelectedVariant = {...selectedVariant,[option] : value}
    const availableVariants = data.variantData.filter(variant => {
        return Object.entries(updatedSelectedVariant).every(([key,value]) => {
          return !value || variant.combination[key] === value;
        })
    })
    return availableVariants.length === 0
  }

  useEffect(() => {
    console.log(selectedVariant);
    
  },[selectedVariant])

  return (
    <section className='bg-white min-h-screen min-w-screen p-4'>
      <div className="flex gap-4 flex-wrap" >
        {
          Object.entries(options).map(([key,value],index) => (
            <div key={index} className="flex flex-col p-4 border rounded-xl mb-4 h-fit gap-3">
              <p>Option : {key}</p>
              <div className='flex gap-2'>
                {
                  value.map((item,idx) => (
                    <span key={idx} 
                    onClick={() => {
                      if (isOptionDisabled(key, item) && selectedVariant[key] !== item) {
                        handleDisabledClick();
                      } else {
                        setSelectedVariant((prev) => ({
                          ...prev,
                          [key]: prev[key] === item ? undefined : item
                        }));
                      }
                    }}
                    
                    className={`px-4 py-2 border rounded-lg ${
                      selectedVariant[key] === item
                        ? 'bg-blue-500 text-white'
                        : 'bg-white'
                    } ${
                      isOptionDisabled(key, item)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : ''
                    }`}
                    disabled={isOptionDisabled(key, item)}
                   
                    >{item}</span>
                  ))
                }
              </div>


            </div>
          ))
        }
      </div>
    </section>
  );
}

export default VarChecker
