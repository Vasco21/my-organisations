import React from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'

import "./custom.css";

const StoreContainer = styled.div`
  padding: 20px;
`

const SampleStore = ({children, twoColumn=false}) => (
    
    

    <StoreContainer>
        <div className='store-header'>
            <div className='store-logo'>Creative Power.Org</div>
            <Spacer horizontal/>
            <div>
                <div className='store-name'>God Bless Your Heart!!</div>
                <h5>Supports a youth-led Creative Power.Org initiative, making local changes that can bring future to our lives. </h5>
                <div className='store-details'>
                    <Spacer horizontal/>
                </div>
            </div>
        </div>
        <div className='store-content'>
            {twoColumn ? (
                <div className='row'>
                    <div className='col col--6'>
                        <div className='product'>
                            <h4>R100.00</h4>
                        </div>
                        <Spacer />
                    </div>
                    <div className='col col--6'>
                        <Spacer size='lg' />
                        {children}
                    </div>
                </div>
            ): (
                <>
                    <div className='product'>
                    
                    <h4>R100.00</h4>
                    </div>
                    <Spacer />
                    {children}
                </>
            )}
        </div>
        <div className='childContainer'>

        </div>
    </StoreContainer>
)

export default SampleStore
