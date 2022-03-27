import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Categoriescard from '../Components/CategoriesCard';
import Categoriesheader from '../Components/CategoriesHeader';
import Searchinput from '../Components/SearchInput';
import random from '../Assets/img/meal.png'

const Categoriespage = () => {
    return (
        <Box w={'95%'} mx={'auto'}>
            <Categoriesheader currentRoute={'Alpha House Business Influencers'} headerName={'Categories'} subtitle={'16 entries'} />
            <Searchinput placeholder={'Search a particular person or category'}/>
            <Box>
                <Link to={'/select-category'} >
                    <Categoriescard img={random} emoji={'🌮'} categoryTitle={'Most Foodian'} subcategory={'2 subcategories 6 candidates'} /> 
                </Link>
            </Box>
            <Categoriescard  emoji={'😭'} categoryTitle={'Most Talkative'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  emoji={'🏌️‍♂️'}  categoryTitle={'Most Popular'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  emoji={'🎨'}  categoryTitle={'Most Controversial'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  emoji={'😭'}  categoryTitle={'Most Foodian'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  emoji={'😭'}  categoryTitle={'Most Talkative'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random}  categoryTitle={'Most Popular'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random}  categoryTitle={'Most Controversial'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random} emoji={'🎟'} categoryTitle={'Most Foodian'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random}  categoryTitle={'Most Talkative'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random}  categoryTitle={'Most Popular'} subcategory={'2 subcategories 6 candidates'} />
            <Categoriescard  img={random}  categoryTitle={'Most Controversial'} subcategory={'2 subcategories 6 candidates'} />
        </Box>
    );
}

export default Categoriespage;
