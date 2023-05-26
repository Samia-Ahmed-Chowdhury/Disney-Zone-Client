import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../App.css'
import TabDivs from './TabDivs';


function CategoryTab() {

    const [subCategory, setSubCategory] = useState('Frozen Dolls')
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`https://disney-zone-server.vercel.app/toy?category=${subCategory}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                console.log(data)
            })
    }, [subCategory])

    return (
        <div className='my-16 lg:my-40 lg:px-12 px-2'>
            <Tabs >
                <TabList >
                    <Tab onClick={() => setSubCategory('Frozen Dolls')}>
                        <span className='text-sm md:text-lg lg:font-medium font-bold'>
                            Frozen Dolls
                        </span>
                    </Tab>
                    <Tab onClick={() => setSubCategory('Disney Princess')}>
                        <span className='text-sm md:text-lg lg:font-medium font-bold'>
                            Disney princess
                        </span>
                    </Tab>
                    <Tab onClick={() => setSubCategory('Donald Duck')}>
                        <span className='text-sm md:text-lg lg:font-medium font-bold'>Donald Duck
                        </span>
                    </Tab>
                </TabList>

                <TabPanel className='tabDesign '>
                    <div className='grid lg:grid-cols-3 gap-8 px-8 py-12'>
                        {
                            datas.map(item =>
                                <TabDivs key={item._id} item={item} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel className='tabDesign '>
                    <div className='grid lg:grid-cols-3 gap-8 px-8 py-12'>
                        {
                            datas.map(item =>
                                <TabDivs key={item._id} item={item} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel className='tabDesign '>
                    <div className='grid lg:grid-cols-3 gap-8 px-8 py-12'>
                        {
                            datas.map(item =>
                                <TabDivs key={item._id} item={item} />
                            )
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default CategoryTab