package org.javaee.testmybatis.dao;

import org.javaee.testmybatis.mapper.OrdersMapper;
import org.javaee.testmybatis.model.OrderPo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OrdersDao {



    @Autowired
    private OrdersMapper ordersMapper;

    public Object searchOrders(Integer id) {

        return null;
    }

}
