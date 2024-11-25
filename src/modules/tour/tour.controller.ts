import { Request, Response } from 'express';
import { tourService } from './tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await tourService.createTour(body);
    res.send({
      status: true,
      message: 'Tour crated successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours();
    res.send({
      status: true,
      message: 'Tours get successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.getSingleTour(id);
    res.send({
      status: true,
      message: 'Tour get successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await tourService.updateTour(id, body);
    res.send({
      status: true,
      message: 'Tour updated successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.deleteTour(id);
    res.send({
      status: true,
      message: 'Tour delete successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.getNextSchedule(id);
    res.send({
      status: true,
      message: 'Tour delete successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const tourController = {
  createTour,
  getSingleTour,
  getTours,
  updateTour,
  deleteTour,
  getNextSchedule,
};
