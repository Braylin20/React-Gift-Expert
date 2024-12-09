import { useState } from 'react'
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setcategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) =>
                (
                    <GiftGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}