package org.javaee.testmybatis.mapper;

import org.javaee.testmybatis.model.OrderItem;
import org.javaee.testmybatis.model.OrderPo;

import java.util.ArrayList;
import java.util.List;

public interface OrdersMapper {

    OrderPo selectOrderById(Integer id);

    ArrayList<OrderItem> selectAllOrderItems(Integer pid);

    void insertNewOrder(Object o);

    void insertNewOrderItem(Object o);


}
