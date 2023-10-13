import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionChart from './TransactionChart'
// import BuyerProfileChart from './BuyerProfileChart'
// import ResentOrders from './ResentOrders'
// import PopularProducts from './PopularProducts'
import { Col, Row } from 'antd';
import TransastionHistory from './TransastionHistory'
import Table from './Table'
import Upgrade from './Upgrade'
import Calendar from './Calendar'
import MeetingCard from './MeetingCard'





function Dashboard() {
  return (
    <Row gutter={16} className='w-[100%]'>
      <Col className='gap-4' xs={24} sm={24} md={24} lg={24} xl={18} xxl={18}>
        <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <DashboardStartsGrid />
        </Col>
        <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <TransactionChart />
        </Col>
        <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <TransastionHistory />
          <Table />
        </Col>
      </Col>
      <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Upgrade />
        </Col>
        <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Calendar />
        </Col>
        <Col className='gap-4 mb-4' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <MeetingCard />
        </Col>
      </Col>
    </Row>
  )
}

export default Dashboard
