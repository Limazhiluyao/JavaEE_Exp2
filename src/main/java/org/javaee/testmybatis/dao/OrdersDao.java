package org.javaee.testmybatis.dao;


import org.javaee.testmybatis.mapper.OrdersMapper;
import org.javaee.testmybatis.model.Order;
import org.javaee.testmybatis.model.OrderItem;
import org.javaee.testmybatis.model.OrderItemPo;
import org.javaee.testmybatis.model.OrderPo;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public class OrdersDao {

    @Autowired
    private OrdersMapper ordersMapper;


    // 默认返回带OrderItems的Order
    public ReturnObject<Order> findOrderById(Integer id) {

        // 获取不包含OrderItems的OrderPo，并交由Order代理
        OrderPo orderPo = ordersMapper.selectOrderById(id);
        Order returnOrder = new Order(orderPo);

        // 根据OrderId查找OrderItemPo，并交由OrderItem代理
        List<OrderItemPo> orderItemPoList = ordersMapper.selectOrderItemsByOrderId(orderPo.getId());
        List<OrderItem> orderItemList = new ArrayList<>(orderItemPoList.size());
        for (OrderItemPo orderItemPo : orderItemPoList)
            orderItemList.add(new OrderItem(orderItemPo));

        // 组装
        returnOrder.setOrderItemList(orderItemList);

        return new ReturnObject<Order>(returnOrder);
    }

    public ReturnObject<Object> createNewOrder(Order order) {
        int flag = ordersMapper.insertNewOrder(order.getOrderPo());
        if (flag == 0)
            return new ReturnObject<>(ResponseCode.FIELD_NOTVALID, "失败");

        List<OrderItem> orderItemList = order.getOrderItemList();
        for (OrderItem orderItem : orderItemList) {
            flag = ordersMapper.insertNewOrderItem(orderItem.getOrderItemPo());
            if (flag == 0)
                return new ReturnObject<>(ResponseCode.FIELD_NOTVALID, "失败");
        }

        return new ReturnObject<>(ResponseCode.OK);

    }
}
