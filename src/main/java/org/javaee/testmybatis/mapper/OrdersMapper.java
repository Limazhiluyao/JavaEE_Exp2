package org.javaee.testmybatis.mapper;

import org.javaee.testmybatis.model.OrderPo;

import java.util.List;

public interface OrdersMapper {

    OrderPo searchOrders(Integer id);

}
