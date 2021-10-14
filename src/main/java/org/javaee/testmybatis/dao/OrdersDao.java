package org.javaee.testmybatis.dao;

import org.javaee.testmybatis.mapper.OrdersMapper;
import org.javaee.testmybatis.model.Order;
import org.javaee.testmybatis.model.OrderPo;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;


public class OrdersDao {

    @Autowired
    private OrdersMapper ordersMapper;

    public ReturnObject<Order> searchOrdersById(Integer id) {
        OrderPo orderPo = ordersMapper.searchOrders(id);
        Order order = new Order(orderPo);
        
        return new ReturnObject<Order>(order);
    }

}
