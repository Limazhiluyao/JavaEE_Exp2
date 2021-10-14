package org.javaee.testmybatis.service;

import org.javaee.testmybatis.model.OrderPo;
import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.dao.OrdersDao;
import org.javaee.testmybatis.model.Order;
import org.javaee.testmybatis.model.VoObject;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    public ReturnObject<VoObject> selectOrderById(Integer id) {
        ReturnObject<Order> returnOrder = ordersDao.searchOrdersById(id);
        ReturnObject<VoObject> returnVoObject = null;
        if (returnOrder.getCode().equals(ResponseCode.OK)) {
            if (returnOrder.getData() != null)
                returnVoObject = new ReturnObject<>(returnOrder.getData());
            else
                returnVoObject = new ReturnObject<>(ResponseCode.RESOURCE_ID_NOTEXIST);
        } else
            returnVoObject = new ReturnObject<>(returnOrder.getCode(), returnOrder.getErrmsg());

        return returnVoObject;
    }

    public void insertOrder(OrderVo orderVo) {

    }
}
