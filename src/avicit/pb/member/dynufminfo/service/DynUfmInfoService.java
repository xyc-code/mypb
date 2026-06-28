package avicit.pb.member.dynufminfo.service;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.member.dynufminfo.dao.DynUfmInfoDAO;
import avicit.pb.member.dynufminfo.dto.DynUfmInfoDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-13 13:13
 * @类说明：DYN_UFM_INFOService
 * @修改记录： 
 */
@Service
public class DynUfmInfoService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynUfmInfoService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynUfmInfoDAO dynUfmInfoDAO;
	
	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @return QueryRespBean<DynUfmInfoDTO>
	* @throws Exception
	*/
	public QueryRespBean<DynUfmInfoDTO> searchDynUfmInfoByPage(QueryReqBean<DynUfmInfoDTO> queryReqBean, String orderBy) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynUfmInfoDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynUfmInfoDTO> dataList = dynUfmInfoDAO.searchDynUfmInfoByPage(searchParams, orderBy);
			QueryRespBean<DynUfmInfoDTO> queryRespBean = new QueryRespBean<DynUfmInfoDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynUfmInfoByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询（不分页）
	* @param searchParams 条件
	* @return List<DynUfmInfoDTO>
	* @throws Exception
	*/
	public List<DynUfmInfoDTO> searchDynUfmInfo(DynUfmInfoDTO searchParams)
			throws Exception {
		try {
			List<DynUfmInfoDTO> dataList = dynUfmInfoDAO.searchDynUfmInfo(searchParams);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynUfmInfo出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynUfmInfoDTO
	 * @throws Exception
	 */
	public DynUfmInfoDTO queryDynUfmInfoByPrimaryKey(String id) throws Exception {
		try {
			DynUfmInfoDTO dto = dynUfmInfoDAO.findDynUfmInfoById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynUfmInfoByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynUfmInfo(DynUfmInfoDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynUfmInfoDAO.insertDynUfmInfo(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynUfmInfo出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynUfmInfoList(List<DynUfmInfoDTO> dtoList) throws Exception {
		try {
			List<DynUfmInfoDTO> beanList = new ArrayList<DynUfmInfoDTO>();
			for (DynUfmInfoDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynUfmInfoDAO.insertDynUfmInfoList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynUfmInfoList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoAll(DynUfmInfoDTO dto) throws Exception {
		try {
			//记录日志
			DynUfmInfoDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynUfmInfoDAO.updateDynUfmInfoAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoSensitive(DynUfmInfoDTO dto) throws Exception {
		try {
			//记录日志
			DynUfmInfoDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynUfmInfoDAO.updateDynUfmInfoSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoList(List<DynUfmInfoDTO> dtoList) throws Exception {
		try {
			return dynUfmInfoDAO.updateDynUfmInfoList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynUfmInfoById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynUfmInfoDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynUfmInfoDAO.deleteDynUfmInfoById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynUfmInfoById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynUfmInfoByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynUfmInfoById(id);
			result++;
		}
		return result;
	}

	/**
	* 日志专用查询
	* @param id 主键id
	* @return DynUfmInfoDTO
	* @throws Exception
	*/
	private DynUfmInfoDTO findById(String id) throws Exception {
		try {
			DynUfmInfoDTO dto = dynUfmInfoDAO.findDynUfmInfoById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	
	
	


@SuppressWarnings("deprecation")
	public void downloadExcel(HSSFWorkbook workbook,int sheetNum,String[] headers,List<DynUfmInfoDTO> dtoList) throws Exception{
		HSSFSheet sheet = workbook.createSheet();
		SimpleDateFormat sr = new SimpleDateFormat("yyyy-mm-dd");
		HSSFRow row = sheet.createRow(0);
		workbook.setSheetName(sheetNum,"优秀铸心突击队备案表");
		sheet.setDefaultColumnWidth((short)10);
		for(int i=0;i<headers.length;i++){
			HSSFCell cell = row.createCell(i);
			HSSFRichTextString text = new HSSFRichTextString(headers[i]);
			cell.setCellValue(text.toString());
		}
		HSSFCell cell;
		HSSFRichTextString text;
		for(int i =0;i<dtoList.size();i++){
	
				
			 row = sheet.createRow(i+1);
			 DynUfmInfoDTO dto = dtoList.get(i);
	
			 cell = row.createCell(0);
			 text = new HSSFRichTextString(dto.getNember());//nember
			 cell.setCellValue(text.toString());
			 cell = row.createCell(1);
			 text = new HSSFRichTextString(dto.getPoName());//poname
			 cell.setCellValue(text.toString());
			 cell = row.createCell(2);
			 text = new HSSFRichTextString(dto.getUfmname());//ufmname
			 cell.setCellValue(text.toString());
			 cell = row.createCell(3);
			 //text = new HSSFRichTextString(dto.getGender());//性别
			 text = new HSSFRichTextString(dto.getGender());//性别
			 cell.setCellValue(text.toString());
			 cell = row.createCell(4);
			 //text = new HSSFRichTextString(dto.getBirthdate());//
			 text = new HSSFRichTextString(sr.format(dto.getBirthdate()));
			 cell.setCellValue(text.toString());
			 cell = row.createCell(5);
			 text = new HSSFRichTextString(dto.getNation());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(6);
			 text = new HSSFRichTextString(dto.getDuties());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(7);
			 text = new HSSFRichTextString(dto.getUserTitle());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(8);
			 text = new HSSFRichTextString(dto.getFulEducation());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(9);
			 text = new HSSFRichTextString(dto.getPartEducation());//
			 cell.setCellValue(text.toString());
			 
			 
			 cell = row.createCell(10);
			 text = new HSSFRichTextString(dto.getPoliticalOutlook());//政治面貌
			 cell.setCellValue(text.toString());
			 cell = row.createCell(11);
			 text = new HSSFRichTextString(dto.getUfIdentity());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(12);
			 text = new HSSFRichTextString(dto.getReligiousBelier());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(13);
			 text = new HSSFRichTextString(dto.getResidenceCountry());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(14);
			 text = new HSSFRichTextString(dto.getResidenceYear());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(15);
			 text = new HSSFRichTextString(dto.getResidenceReason());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(16);
			 text = new HSSFRichTextString(dto.getHoCompatriots());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(17);
			 text = new HSSFRichTextString(dto.getHoDependents());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getTaiwanCompatriots());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getTaiwanRelatives());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getRoChinese());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getHostCountry());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getPartyReprePositions());//
			 cell.setCellValue(text.toString());
			 cell = row.createCell(18);
			 text = new HSSFRichTextString(dto.getPhoneNumber().toString());//
			 cell.setCellValue(text);
					 
		}
		
	}
	
	
/**
 * 查询
 * copy  queryDynUfmInfoByPrimaryKey
 * 
 */
public DynUfmInfoDTO queryEmployeeid(String employeeid) throws Exception {
	try {
		DynUfmInfoDTO dto = dynUfmInfoDAO.findEmployeeid(employeeid);
		//记录日志
		if (dto != null) {
			SysLogUtil.log4Query(dto);
		}
		return dto;
	} catch (Exception e) {
		e.printStackTrace();
		logger.error("queryEmployeeid出错：", e);
		throw new DaoException(e.getMessage(), e);
	}
}
	
	

	
	
	
	
	
	
	
	
	
	
	
}

