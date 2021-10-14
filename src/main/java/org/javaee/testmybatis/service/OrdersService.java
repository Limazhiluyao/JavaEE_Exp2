package org.javaee.testmybatis.service;

import org.javaee.testmybatis.model.OrderPo;
import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.dao.OrdersDao;
import org.javaee.testmybatis.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    public Object selectById(Integer id) {
        Object returnOrders = ordersDao.searchOrders(id);

        if (returnOrders != null) {

        }

    }

    public void insertOrder(OrderVo orderVo) {

    }
}
