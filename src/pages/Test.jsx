import React, { useState, useRef, useEffect } from 'react';

const EcomVariant = () => {
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const dropdownRef = useRef(null);

    const variantList = {
        color: ["Red", "Green", "Blue", "Yellow", "Black", "White", "Purple", "Pink", "Orange", "Gray"],
        material: ["Silk", "Cotton", "Wool", "Leather", "Polyester", "Linen", "Nylon", "Denim", "Rayon", "Velvet"],
        size: ["S", "M", "L", "XL", "XXL", "XS", "3XL", "4XL", "5XL"],
        pattern: ["Solid", "Striped", "Plaid", "Polka Dot", "Floral", "Geometric", "Animal Print", "Herringbone", "Paisley", "Abstract"],
        brand: ["Nike", "Adidas", "Zara", "H&M", "Gucci", "Prada", "Levi's", "Under Armour", "Uniqlo", "Gap"]
    };

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearch(input);

        if (input.trim() === "") {
            setSuggestions([])
            return;
        }

        const filter = Object.keys(variantList).filter((key) =>
            key.toLowerCase().includes(input.toLowerCase()));
        setSuggestions(filter)
    }

    const addCategory = (cat) => {
        if (selectedCategories.length >= 3) { return; }
        if (!selectedCategories.includes(cat)) {
            setSelectedCategories([...selectedCategories, cat])
        }
        setSearch("")
        setSuggestions([])
    }

    const removeCategory = (cat) => {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
        setSelectedOptions((prev) => {
            const updatedOptions = { ...prev }
            delete updatedOptions[cat];
            return updatedOptions
        })
    }

    const handleOptionChange = (category, option) => {
        setSelectedOptions((prev) => {
            const updatedOptions = { ...prev }
            if (updatedOptions[category]?.includes(option)) {
                updatedOptions[category] = updatedOptions[category].filter((opt) => opt != option)
            }
            else {
                updatedOptions[category] = [...(updatedOptions[category] || []), option]
            }
            return updatedOptions;
        })
    }

    useEffect(() => {
        const onClickOutside = ((e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setSuggestions([])
            }
        });

        document.addEventListener("click", onClickOutside);
        return () => {
            document.removeEventListener("click", onClickOutside)
        }
    }, []);

    // Function to generate combinations
    const generateCombinations = (selectedOptions) => {
        const categories = Object.keys(selectedOptions);
        const selectedValues = categories.map(category => selectedOptions[category]);

        const combine = (arr) => {
            if (arr.length === 0) return [[]];
            const [first, ...rest] = arr;
            const combinationsWithoutFirst = combine(rest);
            const result = [];
            first.forEach(item => {
                combinationsWithoutFirst.forEach(combination => {
                    result.push([item, ...combination]);
                });
            });
            return result;
        };

        return combine(selectedValues).map((combination) => combination.join(' / '));
    };

    const combinations = generateCombinations(selectedOptions);

    return (
        <div>
            <h1 className="font-semibold text-3xl">Product Variant</h1>
            <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Choose Variants</h3>

                <div className="relative" ref={dropdownRef}>
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="Search for a category..."
                        className="border rounded p-2 w-full" />
                    {
                        suggestions.length > 0 && (
                            <div className='absolute bg-white border rounded mt-1 w-full max-h-40 overflow-y-auto shadow-lg z-10'>
                                {
                                    suggestions.map((suggestion, idx) => (
                                        <div key={idx} onClick={() => addCategory(suggestion)} className='cursor-pointer p-2 hover:bg-gray-100'>
                                            {suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

                <div className='mt-4 flex gap-2 flex-wrap'>
                    {
                        selectedCategories.map((category, index) => (
                            <div key={index} className='flex items-center border rounded px-3 bg-blue-100'>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                <button onClick={() => removeCategory(category)} className="ml-2 text-red-500 hover:text-red-700">✖</button>
                            </div>
                        ))
                    }
                </div>

            </div>

            <hr className='my-4 mb-6' />

            <div>
                <h3 className="text-lg font-medium mb-2">Selecting options</h3>
                {
                    selectedCategories.map((category, idx) => (
                        <div key={idx}>
                            <h4 className="text-md font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)} Options</h4>

                            <div className='flex flex-wrap gap-3'>
                                {
                                    variantList[category].map((option, idx) => (
                                        <label key={idx}>
                                            <input type='checkbox' checked={selectedOptions[category]?.includes(option)}
                                                onChange={() => handleOptionChange(category, option)} />
                                            {option}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <hr className='my-4 mb-6' />

            <section>
                <div className='grid grid-cols-[auto_3fr_1fr_1fr_1fr] gap-4 border-b pb-2 justify-center'>
                    <input type="checkbox" />
                    <p>Combination</p>
                    <p>Cost Price</p>
                    <p>Sales Price</p>
                    <p>Actions</p>
                </div>

                {
                    combinations.map((combination, idx) => (
                        <div key={idx} className='grid grid-cols-[auto_3fr_1fr_1fr_1fr] gap-4'>
                            <input type="checkbox" />
                            <p>{combination}</p>
                            <p>$XX.XX</p> {/* Cost Price, replace with dynamic data */}
                            <p>$YY.YY</p> {/* Sales Price, replace with dynamic data */}
                            <p><button className="text-blue-500">Edit</button></p>
                        </div>
                    ))
                }

            </section>

        </div>
    );
};

export default EcomVariant;
