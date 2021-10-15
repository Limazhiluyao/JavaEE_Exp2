package org.javaee.testmybatis.service;


import org.javaee.testmybatis.model.OrderVo;
import org.javaee.testmybatis.dao.OrdersDao;
import org.javaee.testmybatis.model.Order;
import org.javaee.testmybatis.model.VoObject;
import org.javaee.testmybatis.util.ResponseCode;
import org.javaee.testmybatis.util.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    public ReturnObject<VoObject> findOrderById(Integer id) {
        ReturnObject<Order> returnOrder = ordersDao.findOrderById(id);
        ReturnObject<VoObject> returnVoObject = null;
        if (returnOrder.getCode().equals(ResponseCode.OK)) {
            if (returnOrder.getData().getOrderPo() != null)
                returnVoObject = new ReturnObject<>(returnOrder.getData());
            else
                returnVoObject = new ReturnObject<>(ResponseCode.RESOURCE_ID_NOTEXIST, "资源不存在");
        } else
            returnVoObject = new ReturnObject<>(returnOrder.getCode(), returnOrder.getErrmsg());

        return returnVoObject;
    }

    public ReturnObject<VoObject> insertOrder(OrderVo orderVo) {
        ReturnObject<Object> returnOrder = ordersDao.createNewOrder(orderVo.createOrder());
        ReturnObject<VoObject> returnVoObject = null;

        if (returnOrder.getCode().equals(ResponseCode.OK))
            returnVoObject = new ReturnObject<>(ResponseCode.OK);
        else
            returnVoObject = new ReturnObject<>(returnOrder.getCode(), returnOrder.getErrmsg());

        return returnVoObject;

    }
}
