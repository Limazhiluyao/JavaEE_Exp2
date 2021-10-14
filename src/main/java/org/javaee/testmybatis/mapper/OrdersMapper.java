package org.javaee.testmybatis.mapper;

import org.javaee.testmybatis.model.OrderPo;

import java.util.List;

public interface OrdersMapper {

    List<OrderPo> searchOrders(Integer id);


}
