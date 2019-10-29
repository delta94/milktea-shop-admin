import React, {memo} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Icon, Tooltip, message } from 'antd'

import './UserInfo.scss'
// import { requestLogout } from '../../../redux/actions/auth-actions/actions'

export const UserInfo = memo(
    function UserInfo({ collapsed }: any) {
        // const dispatch = useDispatch();
        // const username = useSelector(state => state.user.info &&  state.user.info.username) || "anonymous"
        const handleLogout = () => {
            // const hiden = message.loading('Logout...', 0)
            // dispatch(requestLogout()).then(res => {
            //     switch (res && res.status) {
            //         case 200:
            //             message.success('Logout success',1)
            //             break;
            //         case 401: 
            //             message.warning('Your login session has expired ',1)
            //             break;
            //         default:
            //             message.error('Error', 1)
            //             break;
            //     }
            //     setTimeout(hiden, 100)
            // })
        }
        return (
            <div className={`user-paner${collapsed ? '-collapsed' : ''}`}>
                {
                    !collapsed ? (
                        <>
                            <div className="user-name ">
                                <span>
                                    {'username'}
                                </span>
                            </div>
                            <span onClick={handleLogout} className="pointer">
                                <Icon type="logout" />
                            </span>
                        </>
                    ) : (
                            <Tooltip placement="right" title={'Logout! ' + 'username'}>
                                <span onClick={handleLogout}> 
                                    <Icon style={{ fontSize: '20px' }} type="logout" />
                                </span>
                            </Tooltip>
                        )
                }
            </div>
        )
    }
)
