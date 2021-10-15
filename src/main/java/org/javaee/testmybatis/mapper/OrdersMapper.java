package org.javaee.testmybatis.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.javaee.testmybatis.model.OrderItemPo;
import org.javaee.testmybatis.model.OrderPo;

import java.util.List;

@Mapper
public interface OrdersMapper {

    OrderPo selectOrderById(Integer id);

    List<OrderItemPo> selectOrderItemsByOrderId(Integer orderId);

    Integer insertNewOrder(OrderPo orderPo);

    Integer insertNewOrderItem(OrderItemPo orderItemPo);

}
